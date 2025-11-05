javascript
export default function handler(req, res) {
  console.log('Method:', req.method);
  console.log('Body:', req.body);
  
  if (req.method === 'POST') {
    const body = req.body;
    
    if (body.type === 'confirmation') {
      console.log('Confirmation request for group:', body.group_id);
      return res.status(200).send('7b80460f');
    }
    
    return res.status(200).send('ok');
  } 
  
  return res.status(405).send('Method Not Allowed');
}