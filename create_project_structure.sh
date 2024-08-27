#!/bin/zsh

# Base directory
BASE_DIR="src"

# Directory structure
DIRS=(
  "assets/images"
  "components"
  "navigation"
  "redux/actions"
  "redux/reducers"
  "screens"
  "services"
  "utils"
)

# Files to create
FILES=(
  "components/LoadingScreen.js"
  "navigation/RootNavigator.js"
  "navigation/DrawerNavigator.js"
  "navigation/BottomTabNavigator.js"
  "navigation/StackNavigator.js"
  "redux/store.js"
  "screens/SplashScreen.js"
  "screens/LoginScreen.js"
  "screens/HomeScreen.js"
  "screens/EmployeeScreen.js"
  "screens/HRScreen.js"
  "screens/LeadScreen.js"
  "services/ApiService.js"
  "utils/utils.js"
  "App.js"
  "route.js"
)

# Create directories
for DIR in $DIRS; do
  mkdir -p "$BASE_DIR/$DIR"
done

# Create files
for FILE in $FILES; do
  touch "$BASE_DIR/$FILE"
done

echo "Directory structure created successfully!"

