let data = require ('../../data');

// Generate Id
const randomId = () => {
  const id = Math.floor(data.length*(1+Math.random()*10000));
  return id
}

// Info Request
const infoHandler = async (request,response) =>{
  try{
    const registers = data.length;
    const date = new Date();
    response.status(200).send(`<p>Phonebook has info for ${registers} people</p><p>${date}</p>` );
  } catch (error) {
    console.log(error)
  }
}

// Data Request
const personsHandler = async (request,response) =>{
  if (data.length===0) {
    return response.status(404).json({error: `No Data`});
  }
  try{
    return response.status(200).json(data);
  } catch (error) {
    console.log(error)
  }
}

// Data Request by Id
const personIdHandler = async (request,response) =>{
  const id = Number(request.params.id);
  const find = data.find(e=>e.id===id)
  if (!find) {
    return response.status(404).json({error: `Note with id ${id} not found`});
  }
  try{
    return response.status(200).json(find);
  } catch (error) {
    console.log(error)
  }
}

// Delete Data Request
const deleteHandler = async (request,response) =>{
  const id = Number(request.params.id);
  const find = data.find((e)=>e.id===id)
  if (!find) {
    return response.status(404).json({error: `Note with id ${id} not found`});
  }
  const index = data.indexOf(find)
  const arr1 = data.slice(0,index)
  const arr2 = data.slice(index+1,data.length)
  const newarr = [...arr1, ...arr2]
  data = newarr
  try{
    response.status(200).json(data)
  } catch (error) {
    console.log(error)
  }
}

// Post Data Request
const postHandler = async (request,response) =>{
  // Check for name and number
  const newreg = request.body;
  if (!newreg.name || !newreg.number) {
    return response.status(400).json({ error: 'data missing' });
  }
  // Check for duplicated name
  const find = data.find(e=>e.name===newreg.name)
  if (find){
  return response.status(400).json({ error: 'name must be unique' });
  }

  try{
    newreg.id = randomId();
    data.push(newreg);
    response.status(201).json(data);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {infoHandler, personsHandler, personIdHandler, deleteHandler, postHandler}