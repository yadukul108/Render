import React from 'react';
import { useParams } from 'react-router-dom';
import { transactions } from './Deals';

const TransactionDetail = () => {
  const { id } = useParams();
  const txn = transactions.find(t => t.id === parseInt(id));

  if (!txn) {
    return <div className="p-6">Transaction not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-medium mb-4">Transaction Details</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos illo voluptatum in accusamus quis praesentium ad obcaecati sunt nisi repellendus culpa quisquam vero quae unde iste similique velit, placeat distinctio aperiam ipsa aliquid non dolorem! Ex nesciunt officia consectetur ratione, voluptatum ab, dicta omnis iure cum corporis, officiis magnam voluptates labore? Quam similique dolorum cumque error assumenda illum molestiae corporis aliquid inventore officia ipsum alias, optio, unde molestias ea quas vero quidem asperiores dolores officiis beatae quo. Itaque voluptate dolore repellat rem suscipit id. Suscipit accusamus accusantium tempore eaque rem, magni commodi, ratione asperiores eligendi, amet illo dolor eius.
       
      </div>
    </div>
  );
};

export default TransactionDetail;
