/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dropdown from './Dropdown';
import Form from './Form';
import NavItem from './NavItem';
import NavLink from './NavLink';
import Pagination from './Pagination';

type Size = 'sm' | 'lg';
export interface TablePaginationProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'size' | 'as'> {
  count: number;
  pageIndex: number;
  pageSize: number;
  pageSizeOptions: number[];
  onPageSizeChange: (size: number) => void;
  onPageChange: (page: number) => void;
  pageLimit?: number;
  size?: string;
}

const propTypes = {
  /**
   * @default 'pagination'
   * */
  bsPrefix: PropTypes.string,

  /**
   * Set's the size of all PageItems.
   *
   * @type {'sm'|'lg'}
   */
  size: PropTypes.string,
  /**
   * Total number of rows.
   */
  count: PropTypes.number.isRequired,

  /**
   * Current Page Index.
   */
  pageIndex: PropTypes.number.isRequired,

  /**
   * Default Page Size.
   */
  pageSize: PropTypes.number.isRequired,

  /**
   * An array of page size options.
   */
  pageSizeOptions: PropTypes.array.isRequired,

  /**
   * Number of visible page numbers.
   */
  pageLimit: PropTypes.number,

  /**
   * Callback for Page change event.
   *
   * ```js
   * function onPageChange(page: number) => void
   *  page - selected page index
   * ```
   */
  onPageChange: PropTypes.func.isRequired,

  /**
   * Callback for Page size change event.
   *
   * ```js
   * function onPageSizeChange(size: number) => void
   *  size - selected page size
   * ```
   */
  onPageSizeChange: PropTypes.func.isRequired,
};

const getRange = (start: number, end: number): number[] => {
  /* generate a range : [start, start+1, ..., end-1, end] */
  const len = end - start + 1;
  const a = new Array(len);
  for (let i = 0; i < len; i++) a[i] = start + i;
  return a;
};

const getPaginationGroup = (
  currentPage: number,
  totalPages: number,
  pageLimit = 5,
) => {
  const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
  const len =
    totalPages < Math.ceil(currentPage / pageLimit) * pageLimit
      ? totalPages % pageLimit
      : pageLimit;

  return new Array(len).fill(0).map((_, idx) => start + idx + 1);
};

const PagesDropdown: React.FunctionComponent<{
  pages: number[];
  onPageSelection: (...args: any[]) => void;
}> = ({ pages, onPageSelection, ...props }) => (
  <Dropdown as={NavItem} {...props}>
    <Dropdown.Toggle as={NavLink} variant="text-primary" bsPrefix="">
      <i className="modus-icons">more_horizontal</i>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu-sm" style={{ minWidth: '5rem' }}>
      {pages.map((item) => (
        <Dropdown.Item
          key={item}
          onClick={() => {
            onPageSelection(item);
          }}
        >
          {item}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

const TablePagination = React.forwardRef<HTMLDivElement, TablePaginationProps>(
  (
    {
      count,
      pageIndex,
      onPageChange,
      pageSize,
      pageSizeOptions,
      onPageSizeChange,
      pageLimit = 5,
      className,
      size,
      ...props
    },
    ref,
  ) => {
    const totalPages = Math.ceil(count / pageSize);
    const paginationGroup = getPaginationGroup(
      pageIndex + 1,
      totalPages || 1,
      pageLimit,
    );

    const firstPage = paginationGroup[0];
    const lastPage = paginationGroup[paginationGroup.length - 1];
    const morePagesLeft = firstPage > 1 && getRange(1, firstPage - 1);

    const morePagesRight =
      totalPages > 0 &&
      lastPage !== totalPages &&
      getRange(lastPage + 1, totalPages);

    const handlePreviousPage = useCallback(() => {
      onPageChange(pageIndex - 1);
    }, [pageIndex, onPageChange]);

    const handleNextPage = useCallback(() => {
      onPageChange(pageIndex + 1);
    }, [pageIndex, onPageChange]);

    const handleGotoPage = useCallback(
      (page) => {
        onPageChange(page - 1);
      },
      [onPageChange],
    );

    return (
      <div
        className={classNames(
          className,
          'mrb-table-pagination d-flex justify-content-end  w-100',
        )}
        {...props}
        ref={ref}
        aria-label="Table pagination"
      >
        <div className="mr-2" aria-label="Page size options">
          <Form inline>
            <Form.Group>
              <Form.Label
                className={classNames(
                  'mr-2',
                  size === 'sm' ? 'label-sm' : 'label-lg',
                )}
              >
                Page Size:
              </Form.Label>
              <Form.Control
                size={size as Size}
                as="select"
                custom
                value={pageSize}
                onChange={(e) => {
                  onPageSizeChange(Number(e.target.value));
                }}
                aria-label="Select Page size"
              >
                {pageSizeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
        <div>
          <nav aria-label="Pagination">
            <Pagination className="mb-0" size={size as Size}>
              <Pagination.Item
                disabled={pageIndex === 0}
                onClick={handlePreviousPage}
                aria-label="Previous"
                role="button"
              >
                <i className="modus-icons">chevron_left</i>
              </Pagination.Item>

              {morePagesLeft && (
                <Pagination.Item
                  as="div"
                  className="p-0"
                  aria-label="Go to previous pages"
                  role="button"
                >
                  <PagesDropdown
                    pages={morePagesLeft}
                    onPageSelection={handleGotoPage}
                  />
                </Pagination.Item>
              )}

              {paginationGroup.map((item) => {
                const isActivePage = item === pageIndex + 1;
                return (
                  <Pagination.Item
                    key={item}
                    active={isActivePage}
                    aria-current={isActivePage ? 'page' : undefined}
                    onClick={() => {
                      handleGotoPage(item);
                    }}
                    aria-label={`Page number ${pageIndex + 1}`}
                    role="button"
                  >
                    {item}
                  </Pagination.Item>
                );
              })}

              {morePagesRight && (
                <Pagination.Item
                  as="div"
                  className="p-0"
                  aria-label="Go to next pages"
                  role="button"
                >
                  <PagesDropdown
                    pages={morePagesRight}
                    onPageSelection={handleGotoPage}
                  />
                </Pagination.Item>
              )}

              <Pagination.Item
                disabled={pageIndex + 1 === totalPages}
                onClick={handleNextPage}
                aria-label="Next"
                role="button"
              >
                <i className="modus-icons">chevron_right</i>
              </Pagination.Item>
            </Pagination>
          </nav>
        </div>
      </div>
    );
  },
);

TablePagination.propTypes = propTypes;
TablePagination.displayName = 'TablePagination';

export default TablePagination;
