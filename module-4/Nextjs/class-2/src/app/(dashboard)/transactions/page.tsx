import Image from 'next/image';
import Link from 'next/link';



const transactions = [
  { id: '1', amount: 120.50, date: '2023-01-01', status: 'Completed', recipient: 'Amazon', type: 'Debit' },
  { id: '2', amount: 2500.00, date: '2023-02-01', status: 'Completed', recipient: 'Salary', type: 'Credit' },
  { id: '3', amount: 45.99, date: '2023-03-01', status: 'Pending', recipient: 'Netflix', type: 'Debit' },
  { id: '4', amount: 400.00, date: '2023-04-01', status: 'Failed', recipient: 'Apple Store', type: 'Debit' },
  { id: '5', amount: 500.00, date: '2023-05-01', status: 'Completed', recipient: 'Freelance Work', type: 'Credit' },
];

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>
          <p className="text-gray-500 mt-2">Manage and view your recent transactions.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-indigo-200 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Export CSV
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">Recipient</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 font-medium text-gray-900">#{t.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${t.type === 'Credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {t.type === 'Credit' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                          </svg>
                        )}
                      </div>
                      {t.recipient}
                    </div>
                  </td>
                  <td className="px-6 py-4">{t.date}</td>
                  <td className={`px-6 py-4 font-medium ${t.type === 'Credit' ? 'text-green-600' : 'text-gray-900'}`}>
                    {t.type === 'Credit' ? '+' : '-'}${t.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      t.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      t.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link href={`/transactions/${t.id}`} className="text-indigo-600 hover:text-indigo-800 font-medium text-xs uppercase tracking-wider border border-indigo-200 hover:border-indigo-600 px-3 py-1 rounded-lg transition-all">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}