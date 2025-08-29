<template>
  <div class="resume-container">
    <Profile />
    <Education />
    <Skills />
  </div>
</template>

<script>
import Profile from './components/Profile.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'

export default {
  name: 'App',
  components: { Profile, Education, Skills }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #fdfdfd;
  color: #333;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
}

.resume-container {
  width: 1150px;
  min-height: 100vh;
  padding: 40px;
  margin: 30px;
  box-sizing: border-box;
}
@media (max-width: 1200px) {
  .resume-container {
    width: 700px;
  }
}
header {
  text-align: center;
  margin-bottom: 30px;
  display: flex;
}

header h1 {
  width: 800px;
  color: #134d8f;
}
header * {
  margin: 0 10px;
}

.resume-section {
  margin-bottom: 30px;
}

.resume-section h2 {
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
  color: #134d8f;
  margin-bottom: 10px;
}

strong {
  color: #000000;
}
.flex-here {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>

