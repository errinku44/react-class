#### ● How do we configure tailwind?
=>  Visit the documentation site of tailwaind. https://tailwindcss.com/docs/installation 
    configure the framework wise like for Parcel vsit https://tailwindcss.com/docs/guides/parcel
    The steps are as following : - 
    npm install -D tailwindcss postcss
    npx tailwindcss init

#### ● In tailwind.config.js, what does all keys mean (content, theme, extend, plugins)?
=> Content : in Content we pass the path of all our component where we want to apply the
             tailwind css.
   theme : The theme section of your tailwind.config.js file is where you define your
             project’s color palette, type scale, fonts, breakpoints, border radius values, and more.
   extend : If you’d like to preserve the default values for a theme option but also 
             add new values, add your extensions under the extend key.
   plugins : The plugins allows you to include additional plugins for customizing 
             the generated styles in your Tailwind CSS configuration. These plugins can be used to add new utility classes, modify existing ones, or extend the default configuration with custom options.

#### ● Why do we have .postcssrc file ?
=> The .postcssrc file is used to specify the configuration for PostCSS, a tool for 
   transforming CSS with JavaScript. It allows you to specify which PostCSS plugins should be used for processing your CSS, and any options for those plugins.


   
  

