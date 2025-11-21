import React from 'react'
import {  useGetProductsQuery,  useAddProductMutation, useDeleteProductMutation, useGetProductByIdQuery, useUpdateProductMutation} from '../services/productApi'

const Products = () => {
    const {data, isSuccess, refetch} = useGetProductsQuery()

    console.log("PRODUCTS ---> ", data);
    
const [productName, setProductName] = React.useState('')
const [productDescription, setProductDescription] = React.useState('')


const [addProduct] = useAddProductMutation()



const [deleteProduct] = useDeleteProductMutation()
const [updateProduct] = useUpdateProductMutation()
const [editingId, setEditingId] = React.useState(null)

const handleAddProduct = async () => {
    if (productName.trim() && productDescription.trim()) {
        await addProduct({ name: productName, description: productDescription })
        setProductName('')
        setProductDescription('')
        refetch()
    }
}

const handleDelete = async (id) => {
    await deleteProduct(id);
    refetch()
}

const handleUpdateClick = (product) => {
    setEditingId(product.id)
    setProductName(product.name)
    setProductDescription(product.description)
}

const handleUpdate = async () => {
    if (editingId && productName.trim() && productDescription.trim()) {
        await updateProduct({ id: editingId, name: productName, description: productDescription })
        setEditingId(null)
        setProductName('')
        setProductDescription('')
        refetch()
    }
}

return (
<div>
    <div className="bg-gray-100 min-h-screen font-sans">
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <header className="text-center mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
                    Product Management
                </h1>
                <p className="mt-2 text-lg text-gray-500">A modern interface for your product inventory.</p>
            </header>

            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 mb-12 transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-700 mb-6">{editingId ? 'Edit Product' : 'Add a New Product'}</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors duration-200"
                    />
                    <textarea
                        placeholder="Product Description"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        rows="3"
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors duration-200"
                    />
                    <button
                        onClick={editingId ? handleUpdate : handleAddProduct}
                        className={`w-full text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                            editingId 
                            ? 'bg-green-500 hover:bg-green-600 focus:ring-green-400' 
                            : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-400'
                        } hover:scale-[1.02] active:scale-[0.98]`}
                    >
                        {editingId ? 'Update Product' : 'Add Product'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isSuccess && data?.map((product, index) => (
                    <div 
                        key={product.id} 
                        className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
                        style={{ animation: `fadeInUp 0.5s ${index * 0.1}s ease-out forwards`, opacity: 0 }}
                    >
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        </div>
                        <div className="px-6 pb-6 flex justify-end items-center gap-3 bg-gray-50/50">
                            <button
                                onClick={() => handleUpdateClick(product)}
                                className="p-2 rounded-full text-gray-500 hover:bg-yellow-100 hover:text-yellow-600 transition-colors duration-200"
                                aria-label="Update"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button
                                onClick={() => handleDelete(product.id)}
                                className="p-2 rounded-full text-gray-500 hover:bg-red-100 hover:text-red-600 transition-colors duration-200"
                                aria-label="Delete"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <style>
            {`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}
        </style>
    </div>
</div>
    )
}

export default Products