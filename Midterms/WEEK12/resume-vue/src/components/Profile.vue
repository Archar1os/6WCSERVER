<template>

<section class="resume-section">
  <div class="flex-here under-here">
    <h2 class="bordernone">Profile</h2>
      <img src="../assets/profile.png" alt="Profile Picture" width="100" height="100"/>
</div>
    <p><strong>Name:</strong> Smith Dainielle L. Romero</p>
    <p><strong>Email:</strong> smithdainromero@gmail.com</p>
    <p><strong>Contact:</strong> Phone: +63 9605620450</p>
    <p><strong>Course:</strong> Webdev</p>
    <p><strong>Specialization:</strong> Web Development</p>
    <p><strong>Objective:</strong> To become a skilled full-stack developer and contribute to innovative projects.</p>
  </section>
</template>

<script>
export default {
  name: 'Profile'
}
</script>
<style scoped>
  .flex-here {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0;
    margin: 0;
    height: 45px;
    justify-content:space-between;
  }
  .under-here {
  border-bottom: 2px solid #333;
  padding: 0;
  margin: 0;
  color: #134d8f;
  }

  .bordernone {
    border-bottom: none;
  }
  img {
    width: 125px;
  }
</style>