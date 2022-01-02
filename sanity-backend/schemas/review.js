export default {
    name:"review",
    title:"Review",
    type:"object",
    fields: [
        {
            name:"reviewDescription",
            title:"Review Description",
            type:"string",
        },
        {
            name:"traveller",
            title:"Rraveller",
            type:"traveller",
        },
        {
            name:"rating",
            title:"Rating",
            type:"string",
            options: {
                list: [
                    {title:"5 Stars", value:"5-satrs"},
                    {title:"4 Stars", value:"4-satrs"},
                    {title:"3 Stars", value:"3-satrs"},
                    {title:"2 Stars", value:"2-satrs"},
                    {title:"1 Stars", value:"1-satrs"},
                ]
            },
            layout: "radio"
        },
    ]
}