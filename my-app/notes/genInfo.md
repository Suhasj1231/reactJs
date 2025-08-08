## 1️⃣ Event Propagation in the DOM
When an event happens (like a click), the browser processes it in three phases:

Capturing Phase (a.k.a. "trickling down")

Event travels from the window → document → <html> → <body> → ... → target element.

Happens before the actual target handles the event.

Rarely used in practice.

Target Phase

Event reaches the actual element where it happened.

Bubbling Phase

Event travels back up from the target element → parent → ancestor → window.

This is default in most event listeners unless specified otherwise.



## | Feature           | Bubbling (default)                        | Capturing                                    |
| ----------------- | ----------------------------------------- | -------------------------------------------- |
| Direction         | From target **upwards** to ancestors      | From root **downwards** to target            |
| Default in React? | ✅ Yes                                     | ❌ No (needs explicit setting)                |
| Use case          | Most event handling (clicks, form events) | Special control before target gets the event |


