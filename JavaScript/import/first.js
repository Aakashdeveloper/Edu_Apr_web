let articles = {}

articles.latestItem = [
    {
        namee:'About JavaScript',
        price:456
    },
    {
        name:'About React',
        price:687
    }
]

articles.find =(table)=>{ return `Select * from ${table}`},
articles.insert =(table,dbo)=>{return `Inser into ${table} name,city VALUES(${dbo.name}, ${dbo.city})`}

//module.exports = articles
export default articles;