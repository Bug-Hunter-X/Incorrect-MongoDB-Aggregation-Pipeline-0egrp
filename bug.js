```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$group: {_id: "$field", sum: {$sum: "$anotherField"}}}, //Error in the sum aggregation
  {$sort: {sum: -1}}
])
```