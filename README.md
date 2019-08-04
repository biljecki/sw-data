min node version: 10

create `./config.json` (git ignored) :

```
{
  "startDate": "2019-07-01",
  "endDate": "2019-07-31",

  "startTime": "8:00",
  "endTime": "16:30",

  "macIds": [ "111-1", "222-2", "333-3", "444-4" ],

  "durationRange": "5-20",
  "idleRange": "5-20",
  "initialStartOffsetRange": "300-600"
}
```

create `./data/` folder

run `node index`

todo: 
 - create migration file for mac ids
 - migration script 
