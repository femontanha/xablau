const presets = [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
    [
        '@babel/preset-env',
        {
            'modules': false,
            'targets': {
                'esmodules': true
            }
        }
    ]
];

module.exports = function (api) {
    api.cache(true);

    return {
      presets,
    };
}
