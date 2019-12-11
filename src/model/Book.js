export default class BookDTO {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}

// Probably should be somewhere else 
export function createSampleBooks() {
  return [
    new BookDTO(1, "Computer magic", "Duis id lectus vitae nisl iaculis dignissim at vel eros. Sed elit quam, laoreet quis aliquam id, laoreet vitae ligula. Nulla tristique, felis eu sollicitudin venenatis, mi risus porttitor lacus, at tincidunt libero velit in nibh. In dictum, orci vitae sodales viverra, nulla lorem vulputate urna, eu maximus nulla augue commodo nulla. Morbi molestie, est sit amet mollis elementum, turpis elit consectetur quam, a accumsan mi mauris vitae libero. Etiam dictum sagittis orci, id dignissim dui porta non. Praesent porta, eros in sollicitudin laoreet, tellus dui ultricies nunc, non consectetur arcu nisi eget augue. Pellentesque id gravida urna, at facilisis est. Donec id lacus est. Mauris eleifend laoreet arcu, non pretium metus ornare sed. In hac habitasse platea dictumst. Curabitur molestie, purus in ornare commodo, nulla nisl euismod tellus, in ullamcorper tellus velit in augue. Curabitur ac posuere purus. Nulla orci arcu, porta sed est luctus, luctus tincidunt tellus."),
    new BookDTO(2, "Secret cooking ingredients", "Etiam at quam ornare enim accumsan tristique id faucibus eros. Mauris placerat sed est sit amet elementum. Donec elementum, augue nec laoreet ornare, massa nibh lobortis felis, at sodales sem ipsum quis leo. Mauris dictum malesuada leo, vel mattis elit pulvinar ac. Aliquam a lorem erat. Donec vel nunc id dui ullamcorper fringilla quis et dolor. Aliquam tincidunt quis nulla vel suscipit. Quisque vel bibendum magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur rhoncus velit eget urna pulvinar aliquet. In quis mi ut nisi euismod dictum non eget augue. Proin in molestie dui, eget vestibulum urna. Cras semper diam eu suscipit maximus. Vivamus eros nunc, mattis in sem eu, rhoncus ornare velit."),
    new BookDTO(3, "Art of binding", "Mauris ut finibus felis, eu dictum odio. Nam orci leo, ultricies ac sem a, finibus congue sapien. Mauris dictum gravida mauris. Nam et dignissim eros. Aliquam cursus pharetra leo vel finibus. Cras vehicula mauris in pretium commodo. Vestibulum vehicula molestie varius. Phasellus non tellus et leo consequat tincidunt. Duis vitae viverra augue, vel sollicitudin metus. Pellentesque auctor erat sed est lobortis rhoncus ut at ligula. Fusce sodales, enim sit amet varius placerat, odio metus imperdiet sapien, a hendrerit libero mauris ut nulla. Sed at erat quam. Donec sodales ante a nibh bibendum lobortis. Mauris lobortis elit quis libero rutrum, eget rutrum dolor sagittis. In fringilla vel nisl ut mollis. Cras finibus dolor eget nisl sodales, in dictum purus pretium.")
  ];
}