
namespace CIntermedio
{
    partial class Form3
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.buttonExtended1 = new CIntermedio.ButtonExtended();
            this.customControl1 = new CIntermedio.CustomControl();
            this.SuspendLayout();
            // 
            // buttonExtended1
            // 
            this.buttonExtended1.Location = new System.Drawing.Point(199, 60);
            this.buttonExtended1.Name = "buttonExtended1";
            this.buttonExtended1.Size = new System.Drawing.Size(75, 23);
            this.buttonExtended1.TabIndex = 0;
            this.buttonExtended1.Text = "buttonExtended1";
            this.buttonExtended1.UseVisualStyleBackColor = true;
            this.buttonExtended1.Click += new System.EventHandler(this.buttonExtended1_Click);
            // 
            // customControl1
            // 
            this.customControl1.LabelTitle = "label1";
            this.customControl1.Location = new System.Drawing.Point(70, 128);
            this.customControl1.Name = "customControl1";
            this.customControl1.Size = new System.Drawing.Size(374, 61);
            this.customControl1.TabIndex = 1;
            // 
            // Form3
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.customControl1);
            this.Controls.Add(this.buttonExtended1);
            this.Name = "Form3";
            this.Text = "Form3";
            this.FormClosed += new System.Windows.Forms.FormClosedEventHandler(this.Form3_FormClosed);
            this.ResumeLayout(false);

        }

        #endregion

        private ButtonExtended buttonExtended1;
        private CustomControl customControl1;
    }
}