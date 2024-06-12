import React from 'react'

const BookServices = () => {
  return (
    <div>BookServices
      <div className='container'>
        <form className='p-2 border border-dark'>
        <div className='row'>
        <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Name</label>
      <input type="name" class="form-control" id="name"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Phone number</label>
    <input type="text" class="form-control" id="pno"/>
  </div>

        </div>
        <div className='row'>
        
          
        <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Email</label>
      <input type="email" class="form-control" id="email4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Services</label>
    <input type="text" class="form-control" id="nm"/>
  </div>
        </div>
        <div className='row'>
        <div className='col-md-12'>
          Subject
          <input type="text" class="form-control" id="pno"/>

</div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
         Message
         <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>

</div>
        </div>
        <div className='row mt-4'>
        <div className='col-md-12'>
          <button>submit</button>
          </div>
        </div>
</form>
      </div>
    </div>
  )
}

export default BookServices