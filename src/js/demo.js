function goBack(){
  if (top.location != self.location) {
    location.href = 'index.html'
  }else{
    history.go(-1)
  }
}