const { test, expect } = require('@playwright/test');


const {faker, th} = require('@faker-js/faker');

const {RandomDataGenerator} = require('../utilities/RandomDataGenerator')
const random = new RandomDataGenerator()


test('POST Create User', async  ({request,baseURL}) =>{                  
        const response = await request.post(baseURL, 
        {
            data:{
           name: await random.getFullName(), 
           gender: await random.getSex(), 
           email: await random.getMail(),
           status:'active',
            }
        });                
        expect (response.ok()).toBeTruthy()
        expect (response.status(),'The user  has not been created').toBe(201)
    
    });
        
test('GET get all users', async ({request,baseURL}) => {
    const response = await request.get(baseURL)
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)

});

test('/GET get user by id ', async ({request,baseURL}) => {
    const response = await request.post(baseURL, 
    {
        data:{
            name: await random.getFullName(), 
            gender: await random.getSex(), 
            email: await random.getMail(),
            status:'active',
             }
    });        
    const respJson =  await response.json()
    const id = respJson.id
    

    const newResponse = await request.get(`${baseURL}/${id}`)
    expect(newResponse.ok()).toBeTruthy()
    expect(newResponse.status()).toBe(200)
    

});



test('/PUT update an user', async ({request,baseURL}) => {
    const response = await request.post(baseURL, 
    {
        data:{
            name: await random.getFullName(), 
            gender: await random.getSex(), 
            email: await random.getMail(),
            status:'active',
             }
    });
    const respJson =  await response.json()   
    const id = respJson.id
    const oldName = respJson.name

    const newReponse = await request.patch(`${baseURL}/${id}`,
    {
        data:{
            name: await random.getFirstName(),
        }

    });

    const newRespJson = await newReponse.json()
    
    const newName = newRespJson.name


    expect(newReponse.ok().toBeTruthy)
    expect(newReponse.status()).toBe(200)
    expect(oldName,`The user ${id} has not been updated`).not.toEqual(newName)




});


test('/DELETE delete an user', async ({request,baseURL}) => {

    const response = await request.post(baseURL, 
    {
        data:{
            name: await random.getFullName(), 
            gender: await random.getSex(), 
            email: await random.getMail(),
            status:'active',
             }
    });        
    const respJson = await response.json()
    const id = respJson.id
    const newResponse = await request.delete(`${baseURL}/${id}`)
    
    
    expect(newResponse.ok()).toBeTruthy()
    expect(newResponse.status()).toBe(204)


    const resp = await request.get(`${baseURL}/${id}`)
    const message = resp.statusText()
    expect(message,`The user with the ${id} has not been deleted`).toEqual("Not Found")    
    
    console.log(await newResponse.text())
});





