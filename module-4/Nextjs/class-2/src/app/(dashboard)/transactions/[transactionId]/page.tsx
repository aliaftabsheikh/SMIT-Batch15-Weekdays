import Link from 'next/link';

const transactions = [
  { id: '1', amount: 120.50, date: '2023-01-01', status: 'Completed', recipient: 'Amazon', type: 'Debit', category: 'Shopping', paymentMethod: 'Visa ending in 4242', reference: 'REF-8932392' },
  { id: '2', amount: 2500.00, date: '2023-02-01', status: 'Completed', recipient: 'Salary', type: 'Credit', category: 'Income', paymentMethod: 'Bank Transfer', reference: 'SAL-99283' },
  { id: '3', amount: 45.99, date: '2023-03-01', status: 'Pending', recipient: 'Netflix', type: 'Debit', category: 'Entertainment', paymentMethod: 'Mastercard ending in 8822', reference: 'SUB-2382' },
  { id: '4', amount: 400.00, date: '2023-04-01', status: 'Failed', recipient: 'Apple Store', type: 'Debit', category: 'Electronics', paymentMethod: 'Visa ending in 4242', reference: 'APP-23829' },
  { id: '5', amount: 500.00, date: '2023-05-01', status: 'Completed', recipient: 'Freelance Work', type: 'Credit', category: 'Income', paymentMethod: 'PayPal', reference: 'PAY-23829' },
];

export default async function TransactionDetail({ params }: { params: Promise<{ transactionId: string }> }) {
  const { transactionId } = await params;
  const transaction = transactions.find(t => t.id === transactionId);

  if (!transaction) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <div className="bg-red-50 p-4 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Transaction Not Found</h2>
        <p className="text-gray-500 mt-2 mb-6">The transaction you are looking for does not exist or has been removed.</p>
        <Link href="/transactions" className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition-colors">
          Back to Transactions
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/transactions" className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-4 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Transactions
        </Link>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Transaction Details</h1>
            <p className="text-gray-500 mt-1">ID: #{transaction.id}</p>
          </div>
          <div className="flex gap-3">
            <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 001.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info Card */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${transaction.type === 'Credit' ? 'from-green-500 to-emerald-600' : 'from-red-500 to-pink-600'} opacity-10 rounded-bl-full -mr-8 -mt-8`}></div>
            
            <div className="flex flex-col items-center justify-center py-8 border-b border-gray-100 mb-8">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${transaction.type === 'Credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {transaction.type === 'Credit' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                )}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-1">
                {transaction.type === 'Credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
              </h2>
              <p className="text-gray-500 font-medium">{transaction.recipient}</p>
              <span className={`mt-3 px-4 py-1.5 rounded-full text-sm font-medium ${
                transaction.status === 'Completed' ? 'bg-green-100 text-green-700' :
                transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {transaction.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Payment Method</p>
                <p className="font-medium text-gray-800 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                  {transaction.paymentMethod}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Category</p>
                <p className="font-medium text-gray-800 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                  {transaction.category}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Transaction Date</p>
                <p className="font-medium text-gray-800 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  {transaction.date}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Reference ID</p>
                <p className="font-medium text-gray-800 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5" />
                  </svg>
                  {transaction.reference}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4">Merchant Details</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xl">
                {transaction.recipient.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-gray-800">{transaction.recipient}</p>
                <p className="text-sm text-gray-500">Merchant</p>
              </div>
            </div>
            <div className="space-y-3">
              <button className="w-full py-2 px-4 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Contact Merchant
              </button>
              <button className="w-full py-2 px-4 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                Report Issue
              </button>
            </div>
          </div>

          <div className="bg-indigo-900 rounded-2xl shadow-sm p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full -mr-8 -mt-8"></div>
            <h3 className="font-bold mb-2 relative z-10">Need Help?</h3>
            <p className="text-indigo-200 text-sm mb-4 relative z-10">
              If you don't recognize this transaction, please contact support immediately.
            </p>
            <button className="w-full py-2 px-4 bg-white text-indigo-900 rounded-xl text-sm font-bold hover:bg-indigo-50 transition-colors relative z-10">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}