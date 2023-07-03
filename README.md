# Linktree
This project is a customizable Linktree built with Jekyll. It allows you to 
create a single page with multiple links to redirect visitors to different 
destinations, all using the power of Jekyll static site generator.

## Features
 - Easy to set up and customize
 - Supports adding unlimited links
 - Mobile-friendly responsive design
 - SEO-friendly URLs
 - Built with Jekyll, a fast and lightweight static site generator
 -Host it for free on GitHub Pages or deploy to your own hosting provider

## Getting Started
### Prerequisites
To run this project, you'll need the following:
 - [Ruby](https://www.ruby-lang.org/en/downloads/) version 2.5.0 or higher, including all development headers(check your 
 Ruby version using `ruby -v`)
 - [RubyGems](https://rubygems.org/pages/download) (check your Gems version using `gem -v`)
 - [GCC](https://gcc.gnu.org/install/) and [Make](https://www.gnu.org/software/make/) (check versions using `gcc -v`, `g++ -v`, and `make -v`)

### Installation
Clone the repository or download the project files.
Open a terminal or command prompt and navigate to the project directory.
Install the project dependencies by running the following command:

```bash
bundle install
```

### Customize
Customize the links by editing the `_data/links.yml` file. Add or remove 
links as needed, providing the name and URL for each link.


Run the Jekyll server locally with the following command:
```bash
    bundle exec jekyll serve
```

Open your browser and visit http://localhost:4000 to see your Linktree in action.
Deploy the project to your preferred hosting provider or use GitHub Pages for free hosting.

## Contributing
Contributions are welcome! If you find any issues or want to suggest new 
features, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
