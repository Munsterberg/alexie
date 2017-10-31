import dev from './dev';
import prod from './prod';

if (process.env.NODE_ENV === 'production') {
  module.exports = prod;
} else {
  module.exports = dev;
}
