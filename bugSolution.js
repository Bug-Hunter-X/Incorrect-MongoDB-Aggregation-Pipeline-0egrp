```javascript
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$addFields: {anotherField: {$toInt: "$anotherField"}}}, // Convert to integer if necessary
  {$group: {_id: "$field", sum: {$sum: "$anotherField"}}}, //Corrected sum aggregation
  {$sort: {sum: -1}}
])
```