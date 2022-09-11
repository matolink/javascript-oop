class Product {
  constructor(name, price, year){
    this.name = name
    this.price = price
    this.year = year
    
  }
}

class UI {
  addProduct(product){
    const productList = document.getElementById('product-list')
    const element = document.createElement('div')
        element.innerHTML=`
    <div class="card text-center mb-4">
      <div class="card-body"> 
        <strong> Product Name </strong>: ${product.name}
        <strong> Product Price </strong>: ${product.price}
        <strong> Product Year </strong>: ${product.year}
        <a href="#" class="btn btn-danger" name="delete">DELETE</a>
      </div>
    </div>
    `;
    productList.appendChild(element)
    this.resetForm();
  }

  resetForm(){
    document.getElementById('product-form').reset();
  }

  deleteProduct(element){
    if (element.name === 'delete') {
      element.parentElement.parentElement.parentElement.remove()
      this.showMessage('product deleted successfully', 'danger')
      
    }

  }
  showMessage(message, cssClass){
    const div = document.createElement('div')
    console.log(div)
    div.className = `alert alert-${cssClass} mt-4`
    div.appendChild(document.createTextNode(message))
    // showing in dom
    const container = document.querySelector('.container')
    const app = document.querySelector('#App')
    container.insertBefore(div, app)
    setTimeout(() => {
      document.querySelector('.alert').remove()
      
    }, 3000);
  }
}

// dom events
document.getElementById('product-form').addEventListener('submit', ev => {
  const name = document.getElementById('name').value
  const price = document.getElementById('price').value
  const year = document.getElementById('year').value
  const product = new Product(name, price, year)
  if( product.name === '' || product.price === '' || product.year === ''){
    return showMessage('please complete field','danger')
  }
  const ui = new UI();
  ui.addProduct(product)
  ui.showMessage('Product added succesfully', 'success')
  ev.preventDefault()
})
document.getElementById('product-list').addEventListener('click', function(ev) {
  const ui = new UI()
  ui.deleteProduct(ev.target)
})
