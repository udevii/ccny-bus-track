terraform {
  backend "s3" {
    bucket = "terraform-state-ccnybustrack-udevii"
    key    = "terraform.tfstate"
    region = "us-east-2" 
  }
}

