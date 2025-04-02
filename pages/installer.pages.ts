class InstallerPrinter{

        private loacators = {
            nextButton: "//Button[@Name='Next']"
            finishButton: "//Button[@Name='Finish']"
        }
        get nextButton() {
            return this.locators.nextButton;
        }

        }
}