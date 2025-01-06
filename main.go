package main

import (
	"context"
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)


type Contact struct {
    Name string
    Email string
    Education string
    GraduationYear string
    Company string
    Position string
    YearsOfExperience string
}

type Contacts = []Contact

type Data struct {
    Contacts Contacts
}

func newContact (name, email, education, company, position, graduationYear, yearsOfExperience string) Contact {
    return Contact{
        Name: name,
        Email: email,
        Education: education,
        GraduationYear: graduationYear,
        Company: company,
        Position: position,
        YearsOfExperience: yearsOfExperience,
    }
}

func fakeData() Data {
    return Data{
        Contacts: []Contact{
            newContact("John", "abc@ajsjvjdsf.com", "Master's Degree in Computer Science", "Acme Corporation", "Sr. Software Engineer", "2010", "10"),
            newContact("Bob", "gohjg@test.gov", "Bachelor's Degree in Computer Science", "Acme Corporation", "Software Engineer", "2020", "3"),
            newContact("Jane", "asld@sadfdf.edu", "Bachelor's Degree of Arts", "FooBar Corp", "Junior Software Engineer", "2023", "0"),
        },
    }
}

func main() {
    app := fiber.New()
    data := fakeData()

    app.Use(logger.New())

    // Serve static files
    app.Static("/", "./wizard/dist")
    app.Static("/frontend", "./frontend/dist")

	 app.Get("/home", func(c *fiber.Ctx) error {
		c.Set("Content-type", "text/html")
		return home(data).Render(context.Background(), c.Response().BodyWriter())
    })

    // API routes
    app.Get("/api/hello", func(c *fiber.Ctx) error {
        return c.JSON(fiber.Map{"message": "Hello, World!"})
    })

    app.Post("/api/contact", func(c *fiber.Ctx) error {
        var contact Contact
        if err := c.BodyParser(&contact); err != nil {
            fmt.Println(err)
            return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Cannot parse JSON"})
        }
        data.Contacts = append(data.Contacts, newContact(contact.Name, contact.Email, contact.Education, contact.Company, contact.Position, contact.GraduationYear, contact.YearsOfExperience))
        return c.JSON(contact)
    })


    // Start server
    app.Listen(":3000")
}
