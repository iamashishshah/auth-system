## Why do we need controller and routes?
We don't write controller in the same file because suppose One controller is taking 100 lines of code, and there are 100 controllers then what will you do? that's why we seperate it.

in the main file we give just glimpse of router and then we write route in other folder so that we don't have to write so many or all the routing path in the same file otherwise suppose in my company there are 1000 routes, then it is not good to write 1000 routes in a sinle folder.

## to test the local origin using curl
curl -H "Origin: http://localhost:3000" http://localhost:9999/ashish
curl http://localhost:9999/ashish

because if i use postman or browser then origin will be undefined