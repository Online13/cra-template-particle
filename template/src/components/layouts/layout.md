# Layouts

By **layout**, I want to talk about general structure of the page which are fixed, like : 
- Header + Footer + Sidebar (here it's the `BasicLayout` component)
- layout for login and register page

All layout component are called in `App.router.jsx`.

We will include all the components with the same layout in a `Route` with the layout as parent.

``` jsx
(
  <BrowserRouter>
    <Routes>
      ...
      <Route element={<BasicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/about" element={<About />} />
      </Route>
      ...
    </Routes>
  </BrowserRouter>
);
```