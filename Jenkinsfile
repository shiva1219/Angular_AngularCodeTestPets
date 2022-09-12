pipeline{
  agent any
  stages {
    stage("test") {
      steps {
        echo 'test....'
      }
    } 
    stage("build") {
      steps {
        bat 'npm install'
        bat 'npm run build'
      }
    }  
  }  
}
