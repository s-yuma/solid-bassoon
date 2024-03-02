import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto'>
      <div className=' flex justify-between items-center'> 
        <h1>Nextjs14</h1>
      </div>
      <table className=' min-w-full divide-y divide-gray-200 dark:divide-gray-200'>
        <thead className=' bg-gray-100 dark:bg-gray-700'>
          <tr>
            <th scope='col' className='p-4'>
              <div className=' flex items-center'>
                <input type="checkbox" id='checkbox-all' className=' w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400'/>
                <label htmlFor="checkbox-all" className=' sr-only'>checkbox</label>
              </div>
            </th>
            <th className=' py-3 text-left'>Image</th>
            <th className=' py-3 text-left'>Product Name</th>
            <th className=' py-3 text-left'>Price</th>
            <th className=' py-3 text-left'>category</th>
            <th className=' py-3 text-left'>Actions</th>
          </tr>
        </thead>
        <tbody className=' bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
          <tr className=' hover:bg-gray-100 dark:hover:bg-gray-700'>
            <td className=' p-4 w-4'>
              <div className=' flex items-center'>
              <input type="checkbox" id='checkbox-table-1' className=' w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400'/>
                <label htmlFor="checkbox-table-1" className=' sr-only'>checkbox</label>
              </div>
            </td>
            <td>
              Image
            </td>
            <td>
              Ihone
            </td>
            <td>
              $99
            </td>
            <td>
              Phone
            </td>
            <td>
              Delete
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default page