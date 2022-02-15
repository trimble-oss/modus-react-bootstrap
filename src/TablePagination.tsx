/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.4
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
import { StyledTablePagination } from './styleHelpers';

export interface TablePaginationProps extends React.HTMLProps<HTMLDivElement> {
  totalPages: number;
  pageIndex: number;
  pageSize: number;
  pageSizeOptions: number[];
  onPageSizeChange: (...args: any[]) => void;
  onPageChange: (...args: any[]) => void;
  pageLimit?: number;
}

const propTypes = {
  /**
   * Pages total count
   */
  totalPages: PropTypes.number.isRequired,

  /**
   * Current Page Index
   */
  pageIndex: PropTypes.number.isRequired,

  /**
   * Callback for Page change event
   */
  onPageChange: PropTypes.func.isRequired,

  /**
   * Default Page Size
   */
  pageSize: PropTypes.number.isRequired,

  /**
   * An array of page size options
   */
  pageSizeOptions: PropTypes.array.isRequired,

  /**
   * Callback for Page size change event
   */
  onPageSizeChange: PropTypes.func.isRequired,

  /**
   * Number of visible page numbers
   */
  pageLimit: PropTypes.number,
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

type MorePagesDropdownProps = {
  pages: number[];
  onPageSelection: (...args: any[]) => void;
};
const MorePagesDropdown: React.FunctionComponent<MorePagesDropdownProps> = ({
  pages,
  onPageSelection,
}) => {
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink} variant="text-primary" bsPrefix="">
        <i className="modus-icons">more_horizontal</i>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-sm" style={{ minWidth: '5rem' }}>
        {pages.map((item) => {
          return (
            <Dropdown.Item
              key={item}
              onClick={() => {
                onPageSelection(item);
              }}
            >
              {item}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const TablePagination = React.forwardRef<HTMLDivElement, TablePaginationProps>(
  (
    {
      totalPages,
      pageIndex,
      onPageChange,
      pageSize,
      pageSizeOptions,
      onPageSizeChange,
      pageLimit = 5,
      className,
      ...props
    },
    ref,
  ) => {
    const paginationGroup = getPaginationGroup(
      pageIndex + 1,
      totalPages || 1,
      pageLimit,
    );

    const firstPage = paginationGroup[0];
    const lastPage = paginationGroup[paginationGroup.length - 1];
    const morePagesLeft = firstPage > 1 && getRange(1, firstPage - 1);
    const morePagesRight =
      totalPages &&
      lastPage !== totalPages &&
      getRange(lastPage + 1, totalPages);

    const handlePreviousPage = useCallback(() => {
      onPageChange(pageIndex - 1);
    }, [pageIndex]);
    const handleNextPage = useCallback(() => {
      onPageChange(pageIndex + 1);
    }, [pageIndex]);
    const handleGotoPage = useCallback((page) => {
      onPageChange(page - 1);
    }, []);

    return (
      <StyledTablePagination>
        <div
          className={classNames(
            className,
            'd-flex justify-content-end container',
          )}
          {...props}
          ref={ref}
        >
          <div className="d-inline-flex align-items-center mr-2">
            <span className="mr-2">Page Size:</span>
            <div>
              <Form.Control
                as="select"
                custom
                value={pageSize}
                onChange={(e) => {
                  onPageSizeChange(Number(e.target.value));
                }}
              >
                {pageSizeOptions.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </Form.Control>
            </div>
          </div>
          <div>
            <nav aria-label="Pagination">
              <Pagination className="mb-0">
                <Pagination.Item
                  disabled={pageIndex === 0}
                  onClick={handlePreviousPage}
                >
                  <i className="modus-icons">chevron_left</i>
                </Pagination.Item>

                {morePagesLeft && (
                  <Pagination.Item id="morePagesLeft" as="div" className="p-0">
                    <MorePagesDropdown
                      pages={morePagesLeft}
                      onPageSelection={handleGotoPage}
                    />
                  </Pagination.Item>
                )}

                {paginationGroup.map((item) => {
                  return (
                    <Pagination.Item
                      key={item}
                      active={item === pageIndex + 1}
                      onClick={() => {
                        handleGotoPage(item);
                      }}
                    >
                      {item}
                    </Pagination.Item>
                  );
                })}

                {morePagesRight && (
                  <Pagination.Item id="morePagesRight" as="div" className="p-0">
                    <MorePagesDropdown
                      pages={morePagesRight}
                      onPageSelection={handleGotoPage}
                    />
                  </Pagination.Item>
                )}

                <Pagination.Item
                  disabled={pageIndex + 1 === totalPages}
                  onClick={handleNextPage}
                >
                  <i className="modus-icons">chevron_right</i>
                </Pagination.Item>
              </Pagination>
            </nav>
          </div>
        </div>
      </StyledTablePagination>
    );
  },
);

TablePagination.propTypes = propTypes;
TablePagination.displayName = 'TablePagination';

export default TablePagination;
