const es6modulewp = require("..");

// the foo object is part of our es6module module
var foo = new es6modulewp.Foo(20, 30);

// do something with foo
foo.printAnAttribute();
foo.setAnAttribute(34)
foo.printAnAttribute();
