# Understanding the structure

I use atomic design to structure this project.

>Atomic design is a new approach to modular design devised by **Brad Frost** to create Design Systems from simpler components: atom, molecules, organisms, template and pages.

| Atom (ui) |
|---|
| It's basic element like button, link, input,... |

| Molecules (sections) |
|---|
| the molecules correspond to groups of atoms forming a unit, this will be the search form including label, text field and button. |

| Organisms (sections) |
|---|
| Organisms refer to complex interface elements and mostly come from groups of molecules and / or atoms. Concretely, it could be a list of products. |

| Template (layouts) |
| --- |
| It's the layout of element, skeleton of the page |

| Page (pages) |
| --- |
|  |