import React, {
  DragEventHandler,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { Button, Form } from '@trimbleinc/modus-react-bootstrap';
import FileUploadDropZoneStyled from './FileUploadDropZoneStyled';
import { FileUploadDropZoneState } from './types';

export interface FileUploadDropZoneProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'accept'> {
  id: string;
  accept?: string[];
  maxFileCount?: number;
  maxTotalFileSizeBytes?: number;
  multiple?: boolean;
  disabled?: boolean;
  uploadIcon?: React.ReactElement | boolean;
  onFiles?: (files: FileList, err: string) => void;
  onDragEnter?: DragEventHandler<any> | undefined;
  onDragLeave?: DragEventHandler<any> | undefined;
  onDragOver?: DragEventHandler<any> | undefined;
  validator?: (files: FileList) => string;
}

const propTypes = {
  /** A HTML id attribute, necessary for proper form accessibility. */
  id: PropTypes.string,

  /**
   * Accepted File types for upload. Values should be either a valid MIME type or a file extension.
   */
  accept: PropTypes.arrayOf(PropTypes.string),

  /**
   * Maximum number of files can be uploaded.
   *
   */
  maxFileCount: PropTypes.number,

  /**
   * Maximum Total size of the files uploaded.
   *
   */
  maxTotalFileSizeBytes: PropTypes.number,

  /**
   * Enable multiple files upload.
   *
   */
  multiple: PropTypes.bool,

  /**
   * Set a custom upload icon or disable it.
   *
   */
  uploadIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),

  /**
   * Callback when files are being uploaded through drag & drop or browse button.
   *
   * ```js
   * function onFiles(files: FileList, err: string) => void
   *  files: (https://developer.mozilla.org/en-US/docs/Web/API/FileList)
   * ```
   */
  onFiles: PropTypes.func,
  /**
   * Callback for when the dragenter event occurs.
   *
   * ```js
   * function onDragEnter(event: React.SyntheticEvent) => void
   * ```
   */
  onDragEnter: PropTypes.func,
  /**
   * Callback for when the dragleave event occurs.
   *
   * ```js
   * function onDragLeave(event: React.SyntheticEvent) => void
   * ```
   */
  onDragLeave: PropTypes.func,
  /**
   * Callback for when the dragover event occurs.
   *
   * ```js
   * function onDragLeave(event: React.SyntheticEvent) => void
   * ```
   */
  onDragOver: PropTypes.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   *
   * ```js
   * function validator(files: FileList) => string
   *  files: (https://developer.mozilla.org/en-US/docs/Web/API/FileList)
   * ```
   */
  validator: PropTypes.func,
};

type FileUploadState = {
  value: FileUploadDropZoneState;
  icon?: React.ReactElement;
  message?: React.ReactElement | string;
};

const DEFAULT = { value: 'default' } as FileUploadState;
const FileUploadDropZone = forwardRef<HTMLDivElement, FileUploadDropZoneProps>(
  (
    {
      id,
      maxFileCount,
      maxTotalFileSizeBytes,
      multiple,
      disabled,
      children,
      as,
      className,
      tabIndex,
      accept,
      uploadIcon,
      onFiles,
      onDragEnter,
      onDragLeave,
      onDragOver,
      validator,
      ...props
    }: FileUploadDropZoneProps,
    ref,
  ) => {
    const resolvedRef = (useRef<HTMLDivElement>(null) ||
      ref) as React.MutableRefObject<HTMLDivElement>;
    const fileInputRef = useRef<HTMLInputElement>(null);

    // workaround for onDragLeave firing on parent div when dragging over a child div
    const dragCounter = useRef(0);

    const [state, setState] = useState<FileUploadState>(DEFAULT);

    const finalUploadIcon = useMemo(() => {
      if (typeof uploadIcon === 'boolean') {
        if (!uploadIcon) return null;
      } else if (uploadIcon !== undefined) return uploadIcon;
      return <i className="modus-icons">cloud_upload</i>;
    }, [uploadIcon]);

    const events = useMemo(
      () =>
        disabled
          ? {}
          : {
              onDragEnter(e) {
                handleDragEnter(e);
              },
              onDragOver(e) {
                handleDragOver(e);
              },
              onDragLeave(e) {
                handleDragLeave(e);
              },
              onDrop(e) {
                handleDrop(e);
              },
              onKeyDown(e) {
                handleKeyDown(e);
              },
            },
      [disabled],
    );

    const handleDragEnter = useCallback(
      (e) => {
        setState({
          value: 'drop',
          message: 'Drag files here.',
        });
        dragCounter.current++;

        e.preventDefault();
        if (onDragEnter) onDragEnter(e);
      },
      [setState],
    );

    const handleDragLeave = useCallback(
      (e) => {
        // workaround for onDragLeave firing on parent div when dragging over a child div
        dragCounter.current--;
        if (dragCounter.current === 0) {
          setState(DEFAULT);
        }

        e.preventDefault();
        if (onDragLeave) onDragLeave(e);
      },
      [setState],
    );

    const handleDragOver = useCallback((e) => {
      e.preventDefault();
      if (onDragOver) onDragOver(e);
    }, []);

    const handleFiles = useCallback(
      (files: FileList) => {
        const err = validator ? validator(files) : validateFiles(files);
        if (err) {
          setState({
            value: 'error',
            icon: <i className="modus-icons">no_entry</i>,
            message: err,
          });
        } else setState(DEFAULT);

        if (onFiles) onFiles(files, err);
      },
      [setState],
    );

    const handleDrop = useCallback(
      (e) => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
        dragCounter.current = 0;
      },
      [handleFiles],
    );
    const handleKeyDown = useCallback(
      (e) => {
        if (!disabled && (e.key == 'Enter' || e.key == ' '))
          fileInputRef.current.click();
      },
      [fileInputRef.current, disabled],
    );

    const handleReset = useCallback(
      (e) => {
        if (!e.key || e.key == 'Enter' || e.key == ' ') {
          setState(DEFAULT);
          dragCounter.current = 0;

          e.preventDefault();
          e.stopPropagation();
        }
      },
      [setState, dragCounter],
    );

    const validateFiles = useCallback(
      (files: FileList) => {
        if (files) {
          const arr = Array.from(files);

          // Accepted File types
          if (accept) {
            const acceptedTypes = new Set(accept);
            const fileExtensionRegExp = new RegExp('.[0-9a-z]+$', 'i');
            const invalidType = arr.find(({ name, type }) => {
              const hasFileExtension = fileExtensionRegExp.test(name);
              if (!hasFileExtension) {
                return true;
              }
              const [fileExtension] = name.match(fileExtensionRegExp);

              if (
                acceptedTypes.has(type) ||
                acceptedTypes.has(fileExtension.toLowerCase())
              ) {
                return false;
              }
              return true;
            });
            if (invalidType) {
              return `Some files do not match the allowed file types (${accept
                .map((item, index) => {
                  return `\"${item}${index === accept.length - 1 ? '' : ','}\"`;
                })
                .join(' ')}).`;
            }
          }

          // Files count
          if (maxFileCount && arr.length > maxFileCount) {
            return `Max file upload limit of ${maxFileCount} files exceeded.`;
          }

          // Multiple upload
          if (!multiple && !maxFileCount && arr.length > 1) {
            return `Multiple files cannot be uploaded.`;
          }

          // Total size
          if (maxTotalFileSizeBytes) {
            const totalSize = arr.reduce((tot, file) => {
              return tot + file.size;
            }, 0);
            if (totalSize > maxTotalFileSizeBytes)
              return `Upload size exceeds limit. Max upload size ${bytesToSize(
                maxTotalFileSizeBytes,
              )}.`;
          }
        }
        return null;
      },
      [maxFileCount, maxTotalFileSizeBytes, multiple],
    );

    function bytesToSize(bytes: number): string {
      const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes === 0) return 'n/a';
      const i: number = parseInt(
        Math.floor(Math.log(bytes) / Math.log(1024)).toString(),
      );
      if (i === 0) return `${bytes} ${sizes[i]}`;
      return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
    }

    return (
      <FileUploadDropZoneStyled
        {...events}
        {...props}
        ref={resolvedRef}
        className={classNames(
          'd-flex flex-column  justify-content-center',
          className,
        )}
        state={(disabled && 'disabled') || (state && state.value)}
        tabIndex={tabIndex || 0}
        aria-label={props['aria-label'] || 'Drop Zone'}
        aria-disabled={
          props['aria-disabled'] ? props['aria-disabled'] : disabled
        }
      >
        {state && (
          <>
            <div className="w-100 h-100 file-drop-zone-overlay" />
            <div className="file-drop-zone-content text-center p-3">
              {state.icon || finalUploadIcon}
              <div>
                {state.message}
                <div className={classNames(state.message && 'd-none')}>
                  Drag files here or{' '}
                  <Form.File
                    id={id}
                    className="p-0 m-0 d-inline"
                    disabled={disabled}
                  >
                    <Form.File.Label
                      className="p-0 m-0 text-primary browse"
                      tabIndex={0}
                      role="button"
                      aria-label="browse"
                      aria-disabled={
                        props['aria-disabled']
                          ? props['aria-disabled']
                          : disabled
                      }
                    >
                      browse
                    </Form.File.Label>
                    <Form.File.Input
                      className="d-none"
                      disabled={disabled}
                      ref={fileInputRef}
                      onChange={(e) => handleFiles(e.target.files)}
                      multiple={multiple || (maxFileCount && maxFileCount > 1)}
                    />
                  </Form.File>{' '}
                  to upload.
                </div>
              </div>
            </div>
            {state && state.value === 'error' && (
              <div className="file-upload-dropzone-reset">
                <div className="reset-container">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="text-center"
                    onClick={handleReset}
                    onKeyDown={handleReset}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </FileUploadDropZoneStyled>
    );
  },
);

FileUploadDropZone.displayName = 'FileUploadDropZone';
FileUploadDropZone.propTypes = propTypes;

export default FileUploadDropZone;
