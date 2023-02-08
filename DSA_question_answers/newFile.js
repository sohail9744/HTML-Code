const elements = [1, 2, 3, 3, 4, 4, 5];

const uniqueElements = elements.filter((element, index, self) => {
  return index === self.indexOf(element);
});

console.log(uniqueElements);
