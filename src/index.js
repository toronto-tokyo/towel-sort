
// You should implement your task here.

module.exports = function towelSort (matrix) {
     if(matrix == undefined) return []
  matrix = matrix.map((item, index) => {
    if(index % 2) return item.sort((a, b) => b -a)
    return item
  })
  return matrix.flat(1)
}
