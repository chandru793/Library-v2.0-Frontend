import React from 'react';
import { Formik } from 'formik';
import '../assets/css/AddBook.css'

const AddBook = () => {
  return (
    <div className='addBook'>
      <div className='addContainer'>
        <Formik
          initialValues={{
            bookName: '',
            authorName: '',
            description: ''
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
          (
            <form
              className="addBookForm"
              onSubmit={handleSubmit}
            >
              <h1 className='title-h1'>Add Book</h1>
              <input
                type="text"
                name="bookName"
                placeholder='Book Name'
                className='input'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bookName}
              />
              <input
                type="text"
                name="authorName"
                placeholder='Author Name'
                className='input'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.authorName}
              />
              <input
                type="text"
                name="description"
                placeholder='Description'
                className='input'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <button
                className='addButton'
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>

            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddBook