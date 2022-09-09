function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length/this.itemsPerPage)
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if(pageIndex >= Math.ceil(this.collection.length/this.itemsPerPage) || pageIndex < 0){
    return -1;
  }
  return pageIndex === Math.ceil(this.collection.length/this.itemsPerPage)-1? this.collection.length % this.itemsPerPage : this.itemsPerPage;

}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return (itemIndex >= this.collection.length || itemIndex < 0 || this.collection.length === 0)? -1 : (Math.ceil((itemIndex+1)/this.itemsPerPage)-1);
}