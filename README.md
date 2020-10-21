# nitrapi expansion
> Unofficial Node.js based SDK for the Nitrapi

## Installation

```sh
$ npm install --save nitrapi-expansion
```

## Usage

```js
var Nitrapi = require('nitrapi');

var api = new Nitrapi("<access token>");

api.getServices(function (services) {
  // successfully got our service list
  console.log(services);
}, function (error) {
  // an error occured
  console.error(error);
});
```

## Documentation

This SDK works very similar to the [Nitrapi-PHP SDK](https://github.com/nitrado/Nitrapi-PHP). You can read the comments there to find out which parameters most methods expect.

For more information on the capabilities of the Nitrapi, consult [the official documentation](https://nitrado.github.io/Nitrapi/).

## License

MIT © [CodingNavi](https://codingnavi.github.io)

## Credit

[CodingNavi](https://codingnavi.github.io)


