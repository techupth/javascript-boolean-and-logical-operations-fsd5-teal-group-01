// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

lastMonthPaidMoreThan4000 = 4001;
isWeekday = "Friday";
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = false;
isPlatinum = "Gold"

let hasPromotion;
hasPromotion = (lastMonthPaidMoreThan4000 > 4000) && (isWeekday = "Friday") && (!hasBoughtProductFromITCategory) 
&& (!hasAttendedDiscountEvent) || (isPlatinum = "Gold");

console.log(hasPromotion);
