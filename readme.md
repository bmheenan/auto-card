# How to use auto-card
Autocard (auto-card) is a utility to help you automate making sheets of cards in photoshop from a template and a json config.
It requires some photoshop skills and some javascript skills.

# Program structure
It's currently set up as a simple example with the following files:

* `utility.js` holds all the helper code. You shouldn't need to modify much here, unless your use cases diverge from
  what auto-card was desgined for.
* `card-template.psd` holds the photoshop file with the template and icons.
* `automation.js` holds the logic on how to modify the template for each card.
* `cards.js` holds the information for each card to print.
* `cards-front-1.png` shows what the example currently exports.

# Running the automation
* Open `card-template.psd` in Photoshop. 
* Select **File** > **Scripts** > **Browse...**
* Find and select **automation.js**

# Overview

## card-template.psd
The photoshop file will need to keep the following layer structure:
* **Icons**: Each icon that may get copied to a card is a direct child of this layer. They all should be against the top
  left corner.
  * **Icon 1**
  * **Icon 2**
  * ...
* **Master Template**: The generic structure of the card, which will be modified by our code for each card. It should
  also be up against the top left corner.
  * ...

**Important:** Two layers under the same parent cannot be named such that one is a prefix of the other. E.g. you cannot
have an Icon named **Gold** and another named **Gold production**. Instead, pick something like **Gold** and
**Production gold**. This is due to the way `utility.js` finds layers; Photoshop appends "copy", "copy 1", "copy 2", ...
to the end of new layers copied from the template, so `utility.js` ensures only the layer name it's looking for is a
prefix of the actual layer.

## cards.js
Inside `cards.js`, you specifiy the values for each card. You must specify an array of objects, but the structure of
each object is up to you. The only constraint is if you're using the copy icon functionality, which is detailed below
in the **Icons** section.

## automation.js
`automation.js` holds the logic to combine the template in `card-template.psd` with the card-specific info in `cards.js`
and export the results. It starts by importing `cards.js` and `utility.js` using Photoshop's import syntax. It has one
single step of execution: To call `automateCards(...)` from `utility.js`, though it also defines the function that will
be used to fill in each card using a copy of the template and an element from `cards.js` (called the "Fill function"). 

When calling `automateCards(...)`, pass an object with the following key/value pairs:
* **"Rows"**: The number of rows of cards to export per sheet. Note that the photoshop file must be sized to accomodate
  this. E.g. `automation.js` uses 4 in the example, and the height of the photoshop file is 4 times the height of
  **Master Template**.
* **"Columns"**: The number of columns of cards to export per sheet. Just like "Rows", the photoshop file must be sized
  to match.
* **"Export path"**: The path you want the finished sheets to be exported to.
* **"Export name prefix"**: The name you want each exported sheet to start with. Numbers will be appended to handle
  exporting multiple sheets.
* **"Card width"**: The width of one card, which must match **Master template** in the photoshop file.
* **"Card height"**: The height of one card, which must match **Master templates** in the photoshop file.
* **"Card info"**: Point to the array of card information used to fill in the template. In the example, it points to the
  array defined in `cards.js` and imported.
* **"Fill function"**: The function to use to fill each card. In the example, it's defined below.
* **"Unique backs"**: Whether you want to export matching sheets for the back of every card.
* **"Back function"**: Like the fill function, the function used to turn the card (already prepared with the fill
  function) into what its back should look like. This is absent in the example because "Unique backs" is false.

### Fill function
The fill function creates a single card when called. It is given 3 parameters by `utility.js`:
* `config` is a json object specifying the information that should be written to this card. Read from it to decide how
  to modify the template.
* `root` points to a layer group that's a copy of **Master template** from the photoshop file. Modify its contents as
  required.
* `iconTemplates` doesn't need to be accessed directly, but needs to be passed to `copyIcons` if you call it.

The body of the function does the real work. See the next section to walk through examples.

# Modifying the script for your own needs

## Getting a layer
You can access any layer within **Master template** by using the (possibly nested) `get(parent, key)` function, within
the fill function in `automation.js`. Start with `root`, and use the layer name specified in the photoshop file, and
`get(...)` will return the child layer matching that name.

**Important**: Remember that no layer can be named a prefix of a "sibling" layer.

## Optional layers
Any layer can be made optional; visible on some cards but not on others. You don't need to do anything special with the
layer in photoshop. You should specify something in `cards.js` to determine if the layer should be shown or not, and
then call `toggle(exression, layer)` in `automation.js` to toggle the layer visible/invisible.

> **Example:**
>
> The **Waves** layer in `card-templates.psd` will only be visible on some cards.
>
> In `cards.js`, we add `"Waves": true,` to any cards where we want the waves to appear.
>
> In the fill function of `automation.js`, we add the line: \
> `toggle(config["Waves"], get(root, "Waves"));`

You can add more complex control flow within your fill function as required. For convinience, `toggle(...)` will return
a boolean matching the `expression` given to it. This allows you to both toggle a layer and use it to evaluate an `if`
conditional.

## Pick one (or more) layer from multiple options
A common need is to pick one option of several possible layers to be visible. E.g. there may be different types of
cards, and each card is one of those types. This can be done by manually toggling each of them, but a shortcut makes
this use case easier.

To set this up, make each possible layer a group and put all of the groups together under a group inside
**Master template**. Specify in `cards.js` the name(s) of which layer(s) should be visible. Inside the fill function,
call `toggleOnly(namesOfVisible, parent)` where `namesOfVisible` is an array of strings specifying which layers should
be visible, and `parent` is the group they're under.

> **Example:**
> 
> The **Type** group in `card-templates.psd` contains 3 different types; each card is one of the types.
>
> In `cards.js`, we add `"Type": "Red",` (or `"Blue"` or `"Green"`) to each card.
>
> In the fill function of `automation.js`, we add the line: \
> `toggleOnly([config["Type"]], get(root, "Type"));` (note the extra `[]` around `config["Type"]` because
  `toggleOnly(...)` expects an array)

## Set text
You can change the text of any text layer in **Master templates** using `set(input, layer)`.

> **Example:**
>
> The **Name** layer in `card-templates.psd` shows the card's name at the top.
>
> In `cards.js`, we add `"Name": "The first card",` (and other names) to each card.
>
> In `automation.js`, we add `set(config["Name"], get(root, "Name");`

## Icons
You can add icons to your cards. To do so:
* In `card-template`, your **Master Template** layer must have an empty layer called **Placeholder**, which is used to
  tell the automation
  where the icons should be inserted.
* Above **Master Template**, the **Icons** layer must contain a layer group for each icon type. Each icon you create can
  be customized in a couple ways:
  * It can have a **Text** layer, and you can specify the exact text inside `cards.js`.
  * It can have an **Optional** layer group, and you can specify which layers within it will be visible.
* In `cards.js`, provide an array of objects, where each object describes the icon(s) that should be on that card:
  * It has an `"ID"` key that matches the layer's name inside **Icons**.
  * Optionally, it specifies the text to use with the `"Text"` key.
  * Optionally, it specifies which optional layers to show with the `"Optional"` key.
* In `automation.js`, call `copyIcons(iconTemplates, layer, icons, config);`, where:
  * `iconTemplates` passes through the parameter passed to your fill function
  * `layer` contains the **Placeholder** layer where the icons should be inserted
  * `icons` is the array of objects you defined in `cards.js`
  * `config` is an object with the following key/value pairs. They describe a line, which the icons will be centered
    under:
    * `"x"`: the horizonal position of the icons against the template.
    * `"y"`: the vertical position of the icons against the template.
    * `"width"`: the width of the row of icons.

> **Example:**
>
> The top-level **Icons** layer contains 7 possible icons that can be copied into cards. Note that within **Place hex**,
  there's a **Text** layer for text, and an **Optional** layer group containing 3 possible colors for the hex.
>
> Inside the **Master template** layer, the **Icons** group contains **Placeholder**.
>
> In `cards.js`, we add to the card named "The second card":
> ```
> "Icons": [
>    {"ID": "Pay amount", "Text": "-10"},
>    {"ID": "Coin"},
>    {"ID": "Arrow"},
>    {"ID": "Place hex", "Text": "HX", "Optional": ["Purple"]},
> ],
> ```
>
> In `automation.js`, we add:
> ```
> copyIcons(iconTemplates, get(root, "Icons"), config["Icons"], {
>     "x": 20,
>     "y": 860,
>     "width": 834,
> });
> ```