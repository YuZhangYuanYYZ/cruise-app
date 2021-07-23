import React from 'react';
import './styles.scss';
import { Button } from '../Button';

export function Pagination(props) {
  const { totalItemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const onNextButtonClick = (currentPage) => onPageChange(currentPage + 1);
  const onPreviousButtonClick = (currentPage) => onPageChange(currentPage - 1);
  if (pagesCount === 1) {
    return (
      <div className="paginations">
        <Button>1</Button>
      </div>
    );
  } else {
    return (
      <div className="paginations">
        <Button onClick={(e) => onPreviousButtonClick(currentPage)}>
          {'<'}
        </Button>
        {generateNumsByLength(pagesCount).map((page) => (
          <Button key={page} className={page === currentPage ? 'selected' : ''}>
            {page}
          </Button>
        ))}
        <Button onClick={(e) => onNextButtonClick(currentPage)}>{'>'}</Button>
      </div>
    );
  }
}

function generateNumsByLength(num) {
  let numArray = [];
  for (let i = 1; i <= num; i++) {
    numArray.push(i);
  }
  return numArray;
}
