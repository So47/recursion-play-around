# recursion-play-around
tail recursion, recursion and D&amp;C


In tail recursion, the last statement is the recursion so the call stack won't overflow.

For the sum function, none of the function calls complete until you hit the base case. A loop can be better in that case for larger arrays. Or just use a tail recursion.
