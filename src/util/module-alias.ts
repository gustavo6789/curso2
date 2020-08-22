import * as path from 'path';
import modulealias from 'module- alias';

const files = path.resolve(__dirname, '../..');

modulealias.addaliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test')
});        