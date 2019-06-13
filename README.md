# Data School poster templates

Attempt at some poster templates based on [posterdown](https://github.com/brentthorne/posterdown) 
with a Data School flavour. To create a poster:

* Install [posterdown](https://github.com/brentthorne/posterdown)
* Clone this repository
* Create a copy of the `demo.Rmd` file and edit the content.

An example of the output from the `demo.Rmd` file can be found in the `example` folder as a PDF. 
Since the page is built around the A0 scaled background image, printing the page to a PDF from the 
browser is the best way to see how everything looks at the "right" page size since fiddling
around with window sizes on the screen can be difficult. 

In addition, if you wish to knit the `demo.Rmd` directly, you will need to make sure you have the
`tidyverse`, `gapminder`, `gganimate`, and `kableExtra` packages installed. The first time you knit
will take a minute or two because of the animation rendering, but this step is cached so will not be
run again unless you change the animation code. 