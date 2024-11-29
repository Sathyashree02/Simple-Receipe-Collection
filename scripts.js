/* scripts.js */
document.addEventListener('DOMContentLoaded', function() {
    const recipeMenuItems = document.querySelectorAll('.recipe-menu li');
    const recipeContainer = document.getElementById('recipe-container');

    const recipes = {
        'chocolate-cake': {
            title: 'Chocolate Cake',
            imgSrc: 'https://trufflenation.com/wp-content/uploads/2023/10/mousse-cake.jpg.webp',
            prepTime: '45 minutes',
            servings: '8 servings',
            ingredients: [
                '2 cups sugar',
                '1-3/4 cups flour',
                '3/4 cup cocoa powder',
                '1-1/2 tsp baking powder',
                '1-1/2 tsp baking soda',
                '1 tsp salt',
                '2 eggs',
                '1 cup milk',
                '1/2 cup vegetable oil',
                '2 tsp vanilla extract',
                '1 cup boiling water'
            ],
            steps: [
                'Preheat oven to 350°F (175°C). Grease and flour two nine-inch round pans.',
                'In a large bowl, stir together sugar, flour, cocoa, baking powder, baking soda, and salt.',
                'Add eggs, milk, oil, and vanilla; beat on medium speed of mixer 2 minutes.',
                'Stir in boiling water (batter will be thin). Pour batter into prepared pans.',
                'Bake 30 to 35 minutes or until wooden pick inserted in center comes out clean.',
                'Cool 10 minutes; remove from pans to wire racks. Cool completely.'
            ]
        },
        'blackforest-cake': {
            title: 'Blackforest Cake',
            imgSrc: 'https://trufflenation.com/wp-content/uploads/2023/08/Eggless-Black-Forest-Cake-1.jpg.webp',
            prepTime: '1 hour 15 minutes',
            servings: '12 servings',
            ingredients: [
                '1-2/3 cups flour',
                '2/3 cup unsweetened cocoa powder',
                '1-1/2 tsp baking powder',
                '1 tsp baking soda',
                '1/2 tsp salt',
                '1 cup sugar',
                '2/3 cup butter, softened',
                '3 large eggs',
                '1 tsp vanilla extract',
                '1 cup milk',
                '2 cups heavy cream',
                '2 tbsp powdered sugar',
                '1 tsp vanilla extract',
                '1 can (21 oz) cherry pie filling',
                'Dark chocolate shavings for garnish'
            ],
            steps: [
                'Preheat oven to 350°F (175°C). Grease and flour two nine-inch round pans.',
                'In a medium bowl, whisk together flour, cocoa powder, baking powder, baking soda, and salt.',
                'In a large bowl, beat sugar and butter with an electric mixer on medium speed until light and fluffy. Add eggs one at a time, beating well after each addition. Beat in vanilla extract.',
                'Gradually add the flour mixture, alternating with milk, beating until just combined. Divide batter evenly between the prepared pans.',
                'Bake for 30 to 35 minutes or until a toothpick inserted into the center comes out clean. Cool in pans for 10 minutes; remove cakes from pans and cool completely on wire racks.',
                'In a large bowl, beat heavy cream, powdered sugar, and vanilla extract with an electric mixer on high speed until stiff peaks form.',
                'To assemble, place one cake layer on a serving plate. Spread with a layer of whipped cream and top with half of the cherry pie filling. Place the second cake layer on top. Spread the top and sides of the cake with the remaining whipped cream. Garnish with the remaining cherry pie filling and dark chocolate shavings.'
            ]
        },
        'whiteforest-cake': {
            title: 'White Forest Cake',
            imgSrc: 'https://trufflenation.com/wp-content/uploads/2023/03/White-Chocolate-Cake-1024x576.jpg.webp',
            prepTime: '1 hour',
            servings: '10 servings',
            ingredients: [
                '1-1/2 cups flour',
                '1-1/2 tsp baking powder',
                '1/2 tsp baking soda',
                '1/4 tsp salt',
                '3/4 cup sugar',
                '1/2 cup butter, softened',
                '2 large eggs',
                '1 tsp vanilla extract',
                '1/2 cup buttermilk',
                '1 cup white chocolate, melted',
                '2 cups heavy cream',
                '2 tbsp powdered sugar',
                '1 tsp vanilla extract',
                '1 can (21 oz) cherry pie filling',
                'White chocolate shavings for garnish'
            ],
            steps: [
                'Preheat oven to 350°F (175°C). Grease and flour two nine-inch round pans.',
                'In a medium bowl, whisk together flour, baking powder, baking soda, and salt.',
                'In a large bowl, beat sugar and butter with an electric mixer on medium speed until light and fluffy. Add eggs one at a time, beating well after each addition. Beat in vanilla extract.',
                'Gradually add the flour mixture, alternating with buttermilk, beating until just combined. Fold in the melted white chocolate. Divide batter evenly between the prepared pans.',
                'Bake for 25 to 30 minutes or until a toothpick inserted into the center comes out clean. Cool in pans for 10 minutes; remove cakes from pans and cool completely on wire racks.',
                'In a large bowl, beat heavy cream, powdered sugar, and vanilla extract with an electric mixer on high speed until stiff peaks form.',
                'To assemble, place one cake layer on a serving plate. Spread with a layer of whipped cream and top with half of the cherry pie filling. Place the second cake layer on top. Spread the top and sides of the cake with the remaining whipped cream. Garnish with the remaining cherry pie filling and white chocolate shavings.'
            ]
        },
        'butterscotch-cake': {
            title: 'Butterscotch Cake',
            imgSrc: 'https://trufflenation.com/wp-content/uploads/2023/07/butterscotch-cake-2.jpg',
            prepTime: '1 hour 10 minutes',
            servings: '10 servings',
            ingredients: [
                '1-1/2 cups flour',
                '1-1/2 tsp baking powder',
                '1/2 tsp baking soda',
                '1/4 tsp salt',
                '3/4 cup sugar',
                '1/2 cup butter, softened',
                '2 large eggs',
                '1 tsp vanilla extract',
                '1/2 cup buttermilk',
                '1 cup butterscotch chips, melted',
                '2 cups heavy cream',
                '2 tbsp powdered sugar',
                '1 tsp vanilla extract',
                '1/2 cup butterscotch sauce',
                'Butterscotch chips for garnish'
            ],
            steps: [
                'Preheat oven to 350°F (175°C). Grease and flour two nine-inch round pans.',
                'In a medium bowl, whisk together flour, baking powder, baking soda, and salt.',
                'In a large bowl, beat sugar and butter with an electric mixer on medium speed until light and fluffy. Add eggs one at a time, beating well after each addition. Beat in vanilla extract.',
                'Gradually add the flour mixture, alternating with buttermilk, beating until just combined. Fold in the melted butterscotch chips. Divide batter evenly between the prepared pans.',
                'Bake for 25 to 30 minutes or until a toothpick inserted into the center comes out clean. Cool in pans for 10 minutes; remove cakes from pans and cool completely on wire racks.',
                'In a large bowl, beat heavy cream, powdered sugar, and vanilla extract with an electric mixer on high speed until stiff peaks form.',
                'To assemble, place one cake layer on a serving plate. Spread with a layer of whipped cream and top with half of the butterscotch sauce. Place the second cake layer on top. Spread the top and sides of the cake with the remaining whipped cream. Garnish with the remaining butterscotch sauce and butterscotch chips.'
            ]
        }
    };

    recipeMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            const recipeKey = this.getAttribute('data-recipe');
            displayRecipe(recipeKey);
        });
    });

    function displayRecipe(recipeKey) {
        const recipe = recipes[recipeKey];
        recipeContainer.innerHTML = `
            <h1>${recipe.title}</h1>
            <img src="${recipe.imgSrc}" alt="${recipe.title}">
            <div class="info">
                <p>Preparation Time: ${recipe.prepTime}</p>
                <p>Serving Size: ${recipe.servings}</p>
            </div>
            <button id="toggleIngredients">Show Ingredients</button>
            <ul id="ingredients" class="hidden">
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <button id="startCooking">Start Cooking</button>
            <ol id="steps">
                ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
            <div id="timer">Time left: ${parseInt(recipe.prepTime) * 60}</div>
            <button id="nextStep">Next Step</button>
        `;

        // Add event listeners for the newly created buttons
        document.getElementById('toggleIngredients').addEventListener('click', function() {
            const ingredientsList = document.getElementById('ingredients');
            ingredientsList.classList.toggle('hidden');
            this.textContent = ingredientsList.classList.contains('hidden') ? 'Show Ingredients' : 'Hide Ingredients';
        });
    
        let stepIndex = 0;
        let timer;
        document.getElementById('startCooking').addEventListener('click', function() {
            stepIndex = 0;
            highlightStep();
            startTimer(parseInt(recipe.prepTime) * 60); // Convert minutes to seconds
        });
    
        document.getElementById('nextStep').addEventListener('click', function() {
            stepIndex++;
            highlightStep();
        });
    
        function highlightStep() {
            const steps = document.getElementById('steps').children;
            for (let i = 0; i < steps.length; i++) {
                steps[i].style.backgroundColor = i === stepIndex ? '#d4edda' : 'transparent';
            }
        }
    
        function startTimer(duration) {
            let timeRemaining = duration;
            clearInterval(timer);
            timer = setInterval(function() {
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                document.getElementById('timer').textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                if (timeRemaining > 0) {
                    timeRemaining--;
                } else {
                    clearInterval(timer);
                    alert('Time is up!');
                }
            }, 1000);
        }
    }
    
    // Display default recipe (e.g., Chocolate Cake) on page load
    displayRecipe('chocolate-cake');
    });
    