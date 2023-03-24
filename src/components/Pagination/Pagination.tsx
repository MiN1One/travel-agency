import classNames from "classnames";
import { memo } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import classes from "./Pagination.module.scss";

interface PaginationProps {
  pagesCount: number;
  activePage: number;
  onPageChange: (page: number) => void;
}

const PAGES_VISIBLE = 3;

function Pagination(props: PaginationProps) {
  const { pagesCount, activePage, onPageChange } = props;

  const pagesArr = Array.from(Array(pagesCount).keys());

  const pageEls = pagesArr.map((page, index) => {
    return (
      <div
        tabIndex={0}
        role="button"
        aria-label={`Page ${index + 1}`}
        key={index}
        onClick={
          typeof page === "number" ? () => onPageChange(page + 1) : undefined
        }
        className={classNames(classes.btn, {
          [classes.active]: typeof page === "number" && page + 1 === activePage,
        })}
      >
        {typeof page === "number" ? page + 1 : page}
      </div>
    );
  });

  return (
    <div className={classes.pagination}>
      <div
        onClick={() => activePage > 1 && onPageChange(activePage - 1)}
        className={classNames(classes.btn, {
          [classes.disabled]: activePage === 1,
        })}
        tabIndex={0}
      >
        <HiOutlineChevronLeft />
      </div>
      {pageEls}
      <div
        onClick={() => activePage < pagesCount && onPageChange(activePage + 1)}
        className={classNames(classes.btn, {
          [classes.disabled]: activePage === pagesCount,
        })}
        tabIndex={0}
      >
        <HiOutlineChevronRight />
      </div>
    </div>
  );
}

export default memo(Pagination);
