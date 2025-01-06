# go-htmx-react-example
This repository demonstrates a Go server using HTMX and React for the frontend.

## Running the Project

To run the project, use the following command:

```sh
go run .
```

Open a browser and go to: `http://127.0.0.1:3000/home`
Note: the demo doesn't quite work with `http://localhost:3000` but I have not spent time figuring out why.


Making Changes to Templ Files
If you make any changes to the .templ files, you must generate the updated code by running:

```sh
templ generate
```

Updating React Projects
If you want to update either the frontend or wizard React projects, follow these steps:

1. Navigate to the respective directory:
```sh
cd frontend
# or
cd wizard
```
2. Run the build command:
```sh
npm run build
```
