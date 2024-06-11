module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      [
        'module-resolver',
        {
          root: ["./"], // Sets the root as the base for the alias
          alias: {
            "@": "./",  // Maps "@" to the root of your project
          },
        },
      ],
    ],
  };
};
