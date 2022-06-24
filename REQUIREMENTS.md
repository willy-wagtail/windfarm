# Context

We have a wind farm with a total capacity of 10 Megawatt (MW). This means that in 1 hour, if it is working at full capacity (wind is blowing fully), it produces 10 Megawatt-Hours (MWh) of electricity. The Wind farm has a meter that reads the total amount of electricity produced per hour. This value is stored in a database.

The wind farm owner is interested in knowing the “capacity factor” of her wind farm. The capacity factor for any given period of time is the actual amount of electricity produced, divided by the maximum possible amount of electricity that could have been produced if the farm would have run at full capacity. The wind farm owner would like to see the capacity factor for various time ranges.

# Task

Create a frontend application that allows the user to select one of several wind farms, define a date range, and then display the capacity factor on a daily aggregated basis (one value for each day) in a form of your choice (e.g. chart or table).

Note that it may be that in a period of time, meter readings are not available for all hours in that period (e.g. on a 24 hour range, 2 hours might be missing and we only have 22 readings). You need to somehow be able to cover this case and make the user aware of this fact.

# Implementation
• Create a new Angular application for this task

• Implement the user interface according to the description above, making sure it has
proper responsive behavior and a nice look (please use your taste for styles detailing)

• No need to implement the backend, you can mock it

• Introduce a shared state in the application to be ready for future business requirements

• Create some sort of README describing your implementation

Bonus: we value tests, so investing there will be a plus.

# Notes

• We are happy to respond to any questions in the group chat
• We value people that care about end result, so don’t hesitate to suggest your own tech
design or improve existing requirements