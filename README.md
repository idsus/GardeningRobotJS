# GardeningRobotJS

This project, which involves the automated planting, watering, growing, trimming, and harvesting of crops using a robotic arm, shows the potential of automation in agriculture. It is a concept of a specific implementation of a basic way in the future, large-scale works. This system can be implemented in many areas, possibly even with wheels to get from place to place to grow and maintain crops. The automation can help in areas where food is scarce like deserts and other areas so that it makes the work of growing food much easier and accessible for people in these areas. The system can also be modified to grow and maintain trees in these dry areas to slow down the effects of climate change (and adapt to the changing weather patterns). Automation can greatly increase the efficiency and productivity of agricultural processes. The robotic arm in this project can perform repetitive tasks like planting seeds, watering plants, and harvesting crops with precision and speed, reducing the need for manual labor. This can lead to higher yields and more efficient use of resources Labor costs are a major expense in agriculture while decreasing labor costs and helping people in areas that lack farmers or food production. Automating this process can also make things more sustainable by precisely adding just enough resources that help yield more. The project can also help small-scale farmers by making sure that everything is affordable by implementing advanced agriculture techniques. In times of food security issues, as the number of people gets closer to running out of food for everyone, automation can ensure a stable food supply and make sure that there is enough. This project is a small step into making a secure and sustainable future to save the world. 


Feedback and future areas of improvement:
```
So. WOW! Amazing! Best I've ever seen. Extra points for doing more than was needed. Also, you should 100% make a video of this and post it in the forum to inspire other students. 

There really isn't much I can offer to improve on this, but just a small thing or so:
- in moveToSeedAndCreateDuplicate you are return an out statement, which causes a Warning: In DexterSim.send, got instruction not normally processed: non_normal_oplet_s in instruction_array: 8,6,1719176675076,,s. 
The thing to keep in mind here is that anything returned to the do_list will end up being sent to the robot, and the robot doesn't know what to do with "Planting seeds...". It's a little confusing, but what you need to return is an IO.out instead of just an out, because the IO.out just send the message to the output pane and then doesnt return anything into the do_list, but the out /also/ returns it's message. 

- Just a small thought, but if you look at the numbers in your plantingCoordinates array, you will start to see patterns. e.g. the X values generally go -0.15, then 0, then +0.15 and repeat. The y values are three at about 0.62, then three at 0.48, then three at 0.33. Z is all the same at about 0.3ish. My point is that you can programmatically generate that array without having to capture all the points manually. Nothing wrong with the way you did it, but generating it would be faster, and more consistent. 

- Continuing on with that idea... you could build a function that takes in a starting point and an ending point that you get with the DexterUI, then a spacing, and it could then calculate the width, length, and (divide by spacing) the "step" between each of those, and then automatically generate different arrays for different fields and crops. (assuming different crops require different spacing.


But again, no need to change anything, this is /amazing/. Well done!
```
